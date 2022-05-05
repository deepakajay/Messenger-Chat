import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { useAuth } from "../contexts/AuthContext"

import { auth } from "../firebase"

function Chats() {
  return (
    <div className='chats-page'>
    <div className='nav-bar'>
      <div className='logo-tab'>
        Dechat
      </div>

      <div className='logout-tab'>
        Logout
      </div>
    </div>
  </div>
  )
}

export default Chats