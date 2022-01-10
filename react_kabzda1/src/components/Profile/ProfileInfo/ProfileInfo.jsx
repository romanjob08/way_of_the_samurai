import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://tigertactic.com/wp-content/uploads/2014/07/Remington-Model-870-Wingmaster-Classic-Trap.jpg"
                    alt="Landscape"/>
            </div>
            <div className={cl.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;