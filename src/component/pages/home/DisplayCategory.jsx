import PropTypes from 'prop-types';

const DisplayCategory = ({ category }) => {
    const { logo, category_name, availability } = category
    console.log(category)
    return (
        <div>
            <div className="card card-compact shadow-xl bg-[#9873FF0C] p-10">
              <img className='w-[50px]' src={logo} alt="Shoes" />
                <div className="mt-6">
                    <h2 className="mb-1">{category_name}</h2>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    );
};

DisplayCategory.propTypes = {
    category: PropTypes.object
};

export default DisplayCategory;