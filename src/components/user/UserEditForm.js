import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { getUserById, updateUser } from "../../modules/UserManager"

export const UserEditForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState({
        image: "",
        name: "",
        email: ""
    })
    const [image, setImage] = useState("")

    const { userId } = useParams()
    const history = useHistory()

    const handleFieldChange = event => {
        const stateToChange = { ...users }
        stateToChange[event.target.id] = event.target.value;
        setUsers(stateToChange)
    }

    const handleCancel = () => {
        history.push("/users")
    }

    useEffect(() => {
        getUserById(userId)
            .then(userFromAPI => {
                setImage(userFromAPI.image)
                setUsers(userFromAPI)
            })
    }, [])

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "ltpz1b8n");
        setIsLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dexjhtget/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        const file = await res.json();
        setImage(file.secure_url);
        setIsLoading(false);
    };

    const updateExistingUser = event => {
        event.preventDefault()
        setIsLoading(true)
        const editedUser = {
            id: parseInt(userId),
            image: image ? image : users.image,
            name: users.name,
            email: users.email
        }

        updateUser(editedUser)
            .then(() => history.push("/users"))
    }

    return (
        <>
            <form className="user">
                <fieldset className="user-edit-form">
                <div className="profileImageEdit">
                <img className="mainImage" src={image} />
                <fieldset className="file-input">
                    <input type="file" id="file" className="file" onChange={uploadImage}/>
                    <label for="file">Choose File</label>
                </fieldset>
                </div>
                    <input type="text" className="name" id="name" onChange={handleFieldChange} placeholder="Change Name" value={users.name} />
                </fieldset>
                <fieldset className="user-edit-form">

                    <input type="text" className="email" id="email" onChange={handleFieldChange} placeholder="Change Email" value={users.email} />
                </fieldset>
            
                    {isLoading ? (
                        <h4 style={{ marginTop: 20 }}>Loading...</h4>
                    ) : (
                        <>
                            <button className="userUpdateButton"
                                variant="secondary" size="sm"
                                disabled={isLoading}
                                onClick={updateExistingUser}>
                                Update
                            </button>
                            <button className="userCancelButton" onClick={handleCancel}> Cancel </button>

                        </>)}

            </form>


        </>
    )
}