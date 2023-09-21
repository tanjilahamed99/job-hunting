import { useEffect, useState } from "react";
import DisplayCategory from "./DisplayCategory";

const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="mt-32 container mx-auto">
            <h2 className="text-center text-[#1A1919] mb-2 font-extrabold text-3xl">Job Category List</h2>
            <p className="text-center font-medium mb-8 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    category.map((category) => <DisplayCategory key={category.id} category={category}></DisplayCategory>)
                }
            </div>
        </div>
    );
};

export default Category;