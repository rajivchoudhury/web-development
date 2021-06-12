import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
        margin: "10px 0px 0px 0px"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">Copyright &copy; MyTodoList.com</p>
        </footer>
    )
}
