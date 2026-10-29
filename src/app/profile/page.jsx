"use client";
import UpdateUserModal from "@/components/ProfilePage/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import userImg from "@/photo/userImg.webp";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  //console.log(user);
  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center">
      {/* profile container */}
      {isPending ? (
        <div className="flex justify-center items-center min-h-[90vh]">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      ) : (
        <div className="  aura aura-gold">
          <div className="card bg-base-100">
            <div className="card-body items-center ">
              <h2 className="text-3xl text-center font-bold mb-7">
                User Profile
              </h2>
              <div className="avatar">
                <div className="w-34 rounded">
                  <Image
                    alt={user?.name}
                    src={user?.image || userImg}
                    height={400}
                    width={400}
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mt-7 ">{user?.name}</h2>
              <p className="text-md font-semibold text-gray-500">
                {user?.email}
              </p>
              <UpdateUserModal></UpdateUserModal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
