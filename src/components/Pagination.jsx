import {useState} from "react";

export default function Pagination({data, description}) {

    const [currentPage, setCurrnetPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);






    function changeCurrentPage(id, e) {
        e.preventDefault()
        setCurrnetPage(id)
    }

    return (
        <div className="pagination-container" >
            <div className="pagination-style">
                <h2 className="header-description">{description}</h2>
                {records.map((element) => (
                    <div className="fundation-item" key={element.id}>
                        <div>
                            <h3 className="item-title">{element.title}</h3>
                            <p className="item-paragraph">{element.description}</p>
                        </div>
                        <span className="item-info">{element.items}</span>
                    </div>
                ))}
            </div>

            <nav className="nav-pagination">
                <ul className="pagination">
                    {
                        numbers.map((pageNumber, index) => (
                            <li className={`page-link ${currentPage === pageNumber ? 'active' : ''}`} key={index}>
                                <a href="#" className="page-item"
                                   onClick={(e) => changeCurrentPage(pageNumber, e)}>{pageNumber}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}