import React from 'react'
import './invitationCard.scss'

const InvitationCard = () => {
  return (
    <div className='invitation-card-container'>
      <div className='invitation-card-wrap'>
        <h2>您好</h2>
        <p>歡迎您追蹤我的的最新消息，請輸入您的電子信箱隨時關注我們。</p>
        <Form />
      </div>
    </div>
  )
}

const Form = () => {
  return (
    <form className='invitation-card-form'>
      <div>
        <input type="email" placeholder='UserEmail @ gmail.com' />
        <button>提交</button>
      </div>
    </form>
  )
}

export default InvitationCard