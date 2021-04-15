import React from 'react'
import styled from 'styled-components'

function Burger({open, setOpen}) {
    return (
        <Container open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </Container>
    )
}

export default Burger

const Container = styled.div`

@media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    left: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 20;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#ccc' : 'white'};
        border-radius: 4px; 
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
}
`