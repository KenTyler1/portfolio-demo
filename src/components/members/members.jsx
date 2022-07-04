import './members.css'

const Members = () => {
    return (
        <div id='members' className='container members-container'>
            <h1 className='member-txt'>Members</h1>
           
            <div className='member member-1'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Tăng Gia Khánh</h1>
                    <h3 className='position'>Leader</h3>
                    <h4 className='about'>No one knows what the future holds. So its potential is limitless.</h4>
                    <a href='#contact' className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>
            <div className='member member-2'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Trần Tấn Kiệt</h1>
                    <h3 className='position'>Member</h3>
                    <h4 className='about'> Enjoy the little things in life for one day you’ll look back and realize they were the big things.</h4>
                    <a href='#contact' className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>
            <div className='member member-3'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Tấn Đức</h1>
                    <h3 className='position'>Member</h3>
                    <h4 className='about'>Don’t tell me what do you think about that I want to hear.Tell me the truth.</h4>
                    <a href='#contact' className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Members;