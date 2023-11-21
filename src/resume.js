const experiences = [
    { title: 'Caltech', isPresent: false, id: 1 },
    { title: 'Berkeley AI Research', isPresent: false, id: 2 },
    { title: 'University of California, Los Angeles', isPresent: true, id: 3 },
  ];
  
  export default function ResumeList() {
    const listItems = experiences.map(experience =>
      <li
        key={experience.id}
        style={{
          color: experience.isPresent ? 'magenta' : 'darkgreen'
        }}
      >
        {experience.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }