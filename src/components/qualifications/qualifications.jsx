import './qualifications.css'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

const Qualification = () => {
    return (
        <div>
            <span className='quali-text'>My featured projects</span>
            <button id='click-left' onClick={scrollLeft}><BsFillArrowLeftCircleFill /></button>
            <div className='qualifications-container'>
                <div className='qualification'>
                    <div className='content html'></div>
                    <h1>Qt Creator Mario</h1>
                </div>
                <div className='qualification'>
                    <div className='content css'></div>
                    <h1>Qt Creator Chess</h1>
                </div>
                <div className='qualification'>
                    <div className='content javascript'></div>
                    <h1>Movies Recommendation System</h1>
                </div>
                <div className='qualification'>
                    <div className='content react'></div>
                    <h1>Sales management website</h1>
                </div>
                <div className='qualification'>
                    <div className='content c-plus-plus'></div>
                    <h1>Information Assurance</h1>
                </div>
                <div className='qualification'>
                    <div className='content c-sharp'></div>
                    <h1>Image Processing</h1>
                </div>
                {/* <div className='qualification'>
                    <div className='content kotlin'></div>
                    <h1>Kotlin</h1>
                </div> */}
            </div>
            <button id='click-right' onClick={scrollRight}><BsFillArrowRightCircleFill/></button>
        </div>
    )
}

function scrollRight () {
    var right = document.querySelector('.qualifications-container')
    right.scrollBy(350, 0)
}

function scrollLeft () {
    var left = document.querySelector('.qualifications-container')
    left.scrollBy(-350, 0)
}

export default Qualification;