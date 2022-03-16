import './App.css';
function App() {
  const singers = [
    { name: 'Dr.Mafus Hasan', Job: 'Singer' },
    { name: 'Sharika', Job: 'Singer' },
    { name: 'Jannat', Job: 'Teacher' },
    { name: 'Kalam', Job: 'Meye potano' }
  ]
  // const names = ['RUbel', 'Manna', 'BappaRaj', 'Kuber']
  // const jobs = ['WebDeveloper', 'Seo Expert', 'Digital Marketer']
  const nayoks = ['Rakib', 'sujon', 'Jubaidul', 'Jibon', 'Shamim', 'Kobir']

  return (
    < div className="App" >
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        // nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={names[0]} job={jobs[0]} Depertment="CSE"></Person>
      <Person name={names[1]} job={jobs[1]} Depertment="EEE"></Person>
      <Person name={names[2]} job={jobs[2]} Depertment="EEE"></Person> */}
      <h4>This is Headding</h4>
      <Friend myDream="What is React ?" details="প্রতিক্রিয়া ইন্টারেক্টিভ UI তৈরি করাকে ব্যথাহীন করে তোলে। আপনার অ্যাপ্লিকেশানের প্রতিটি রাজ্যের জন্য সাধারণ দৃশ্যগুলি ডিজাইন করুন এবং আপনার ডেটা পরিবর্তন হলে প্রতিক্রিয়া দক্ষতার সাথে সঠিক উপাদানগুলিকে আপডেট করবে এবং রেন্ডার করবে৷" sari="দিন দুনিয়ার মালিক খোদা
দিলে কি দয়া হয়না
তোমার দিলে কি দয়া হয়না
তোমার দিলে কি দয়া হয়না"></Friend>
      <Friend myDream="Defenation of English" details="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."></Friend>
      <Friend myDream="Hellow Vai Brother" details="gundami"></Friend>
    </div >
  );
}

function Person(props) {

  return (
    <div className='persion'>
      <h1> {props.name}</h1>
      <h3> {props.job}</h3>
      <h3> {props.Depertment}</h3>
    </div>
  )

}

function Friend(props) {
  return (
    <div className='friend'>
      <h1>Q: {props.myDream}</h1>
      <p>Details: {props.details}</p>
      <p> {props.sari}</p>
    </div>
  )
}

export default App;
