import React from 'react';
import './Home.css';
import profileImg from '../docs/profile.jpg';

function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero-text">
          <div>
            <h2 className="heading">Kurtis Grant</h2>
            <h3 className="sub-heading">Software Developer in Ottawa, Canada</h3>
          </div>
        </div>
        <div className="profile">
          <img src={profileImg} alt="Profile photo" />
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti id minima magnam aspernatur, nam accusantium non doloribus quo aperiam perspiciatis quidem, officiis numquam soluta voluptate! Accusamus perspiciatis soluta nesciunt ipsam autem odit cumque dolore dolorem corrupti iusto.</p>
      <p>Cum neque inventore in minus dolor nemo, nulla porro. A animi, minima optio ea rem odio blanditiis sit suscipit exercitationem quo voluptates dicta omnis dolore ullam sunt totam tenetur amet perspiciatis accusantium iure corporis quia eos repellat! Aliquid omnis voluptas suscipit dignissimos ducimus quibusdam aliquam earum modi rerum veritatis animi, similique quae ut laudantium rem odio eveniet sint inventore quis doloribus labore.</p>
      <p>Deleniti autem dolore aperiam neque, facilis dolores debitis ea. Vitae vero beatae, quaerat omnis cum nobis architecto nemo placeat voluptatibus. Aliquid atque soluta optio consequuntur perspiciatis laboriosam deleniti cum ratione earum necessitatibus possimus pariatur, iusto dolor eius autem dignissimos accusantium aspernatur libero.</p>
    </main>


  );
}

export default Home;