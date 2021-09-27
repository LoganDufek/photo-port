import React from 'react';

const categories = [
  {
    cName: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  },
  { cName: "portraits", description: "Portraits of people in my life" },
  { cName: "food", description: "Delicious delicacies" },
  {
    cName: "landscape",
    description: "Fields, farmhouses, waterfalls, and the beauty of nature",
  },
];

    function categorySelected(cName) {
  console.log(`${cName} was clicked`)
}

function Nav() {

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a data-testid="link" href = "/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                     <li className={"mx-2"}>
                    <span>Contact</span>
                    </li>
                    
                    {categories.map((category) =>(  
                         <li className = "mx-1"
                         key = {category.cName}>
                            <span onClick = { () => categorySelected(category.cName)}>
                                {category.cName}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>

    );

}

export default Nav;