import React from 'react'
// import { whatsapp_float} from './WhatsappStyle'

const Whatsapp = () => {
    return (
        <div>
            <a
                href="https://wa.me/91+9333326377/?text=Welcome to BusinessKaro Team"
                className="whatsapp_float"
                target="_blank"
                body="hello world"
                rel="noopener noreferrer"
            >
                <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </div>
    )
}

export default Whatsapp
