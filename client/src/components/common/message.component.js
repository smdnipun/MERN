import React, { useState, useEffect } from 'react'

export default function Message(gid, username, email) {
  const [messageList, setMessageList] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/message/${gid}`)
      .then((response) => {
        setMessageList(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  })

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        gid: gid,
        author: username,
        email: email,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      }

      axios
        .post('http://localhost:5000/message/add/', messageData)
        .then((res) => console.log(res.data))

      setMessageList(...messageData, messageList)
      setCurrentMessage('')
    }
  }

  return (
    <div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
          {messageList.map((messageContent) => {
            return (
              // <Messages username={username} messageContent={messageContent} />
              <div
                className='message'
                id={email === messageContent.email ? 'you' : 'other'}
              >
                <div>
                  <div className='message-content'>
                    <p>{messageContent.message}</p>
                  </div>
                  <div className='message-meta'>
                    <p id='time'>{messageContent.time}</p>
                    <p id='author'>{messageContent.author}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </ScrollToBottom>
      </div>
      <div className='chat-footer'>
        <input
          type='text'
          value={currentMessage}
          placeholder='Hey...'
          onChange={(event) => {
            setCurrentMessage(event.target.value)
          }}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage()
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}
