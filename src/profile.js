const user = {
    name: 'Annie Zhang',
    imageUrl: 'https://i.postimg.cc/MZYkpbd9/image.png',
    imageSize: 100,
  };
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  
  
  
  