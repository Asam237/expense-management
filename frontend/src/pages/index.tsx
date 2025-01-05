import { DefaultLayout } from "@/layouts/default.layout";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h4>Home</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit incidunt
          minus nesciunt pariatur laudantium, dolore impedit dignissimos
          dolorum, accusamus quidem veniam excepturi aperiam saepe, veritatis
          quibusdam amet repudiandae ducimus harum maiores assumenda voluptates?
          Corrupti expedita illo quis provident ex explicabo dolor fugit!
          Assumenda, soluta numquam totam accusantium nemo illum veniam
          voluptatibus perferendis earum aliquam incidunt voluptate fugit
          dolorem pariatur nihil asperiores, beatae itaque quos sunt! Quod
          officiis dicta deserunt culpa nemo sunt! Facilis tempora nemo deleniti
          blanditiis impedit cupiditate iste magni quam corrupti numquam quia
          iure alias quas facere, cumque veritatis consectetur quis doloribus
          quos deserunt earum inventore voluptas est!
        </p>
      </div>
    </DefaultLayout>
  );
};

export default Home;
