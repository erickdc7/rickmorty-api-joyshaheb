import FilterBTN from "../FilterBTN";

const Gender = ({ setpageNumber, setGender }) => {
    let genders = ["Female", "Male", "Genderless", "Unknown"];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Gender
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {
                        genders.map((items, index) => (
                            <FilterBTN
                                task={setGender}
                                setpageNumber={setpageNumber}
                                key={index}
                                name="gender"
                                index={index}
                                items={items}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Gender