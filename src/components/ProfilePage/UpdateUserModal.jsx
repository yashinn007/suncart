import { authClient } from "@/lib/auth-client";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateUserModal = () => {
  const handelModalSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.value;

    console.log(name, image);

    //update user from better-auth docs
    const { data, error } = await authClient.updateUser({
      image,
      name,
    });

    if (error) {
      toast.error(error.message || "Profile update failed");
      return;
    }

    if (data?.status) {
      toast.success("Profile updated successfully");
      e.target.reset();
      document.getElementById("my_modal_5").close();
    }
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-blue-100 mt-2"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <FaRegEdit />
        Edit Profile
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit your Profile</h3>
          <div className="py-4 flex justify-center items-center ">
            {/* form */}
            <form className="space-y-5 " onSubmit={handelModalSubmit}>
              <fieldset className="fieldset px-10">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  className="input w-xs md:w-sm mx-auto"
                  placeholder="Type here name"
                  name="name"
                />
              </fieldset>
              <fieldset className="fieldset  px-10">
                <legend className="fieldset-legend">Photo URL</legend>
                <input
                  type="text"
                  className="input w-xs md:w-sm mx-auto"
                  placeholder="Type here photo URL"
                  name="photo"
                />
              </fieldset>

              <button
                type="submite"
                className="btn mx-10 bg-[#ae9077] text-white"
              >
                Update
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUserModal;
