function App() {

  return (
    <div className="d-flex justify-content-center  align-items-center  min-vh-100 ">
      <div className="class-container">
        <h1 className="dispay-1">Chat</h1>
        <Routes>
          <Route path='/' element={<EnterChat/>} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </div>
      <EnterChat />
    </div>
  )
}

export default App
