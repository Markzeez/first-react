import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Welcome from './components/Welcome';

function App() {
  const data = [
    {
      id: 1,
      age:23,
      disable: false,
      description:
        'Software Engineer with a passion for building scalable web applications.',
      position: 'Software Engineer',
      company: 'TechCorp',
      name: 'Alice Johnson',
      image:
        'https://res.cloudinary.com/dnyzybzho/image/upload/v1694620841/cld-sample-5.jpg',
    },
    {
      id: 2,
      age:30,
      disable: false,
      description:
        'Marketing Specialist with expertise in digital marketing strategies.',
      position: 'Marketing Specialist',
      company: 'Marketing Pro',
      name: 'Bob Smith',
      image:
        'https://res.cloudinary.com/dnyzybzho/image/upload/v1694620841/cld-sample-4.jpg',
    },
    {
      id: 3,
      age: 27,
      disable: true,
      description:
        'Experienced Project Manager skilled in leading cross-functional teams.',
      position: 'Project Manager',
      company: 'Project Solutions Inc.',
      name: 'Carol Davis',
      image:
        'https://res.cloudinary.com/dnyzybzho/image/upload/v1694620840/cld-sample-3.jpg',
    },
    {
      id: 4,
      age:22,
      disable:false,
      description:
        'Creative Graphic Designer known for delivering stunning visuals.',
      position: 'Graphic Designer',
      company: 'DesignMasters',
      name: 'David Brown',
      image:
        'https://res.cloudinary.com/dnyzybzho/image/upload/v1694620840/cld-sample-2.jpg',
    },
  ];
  return (
    <div className="bg-white-700">

      <Welcome/>
      <Nav />
      <div className='flex gap-5 m-10 '>
        {
          (data.map = data.map((item) => (
            <Cards
              name={item.name}
              position={item.position}
              company={item.company}
              description={item.description}
              image={item.image}
              key={item.id}
            />
          )))
        }
      </div>
    </div>
  );
}

export default App;
