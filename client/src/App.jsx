import ImageUpload from "./components/ImageUpload"

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen">
      <div className=' container mx-auto p-6 md:p-20 text-center'>
        <h1 className=' text-3xl pb-10'>Image Upload App</h1>
        <ImageUpload />
      </div>
    </div>
  );
}

export default App;
