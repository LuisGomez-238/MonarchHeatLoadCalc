import React, { useState } from "react";

function Calculator({ squareFootage }) {
    const [walls, setWalls] = useState('');
    const [floor, setFloor] = useState('');
    const [ducts, setDucts] = useState('');
    const [ceiling, setCeiling] = useState('');
    const [windows, setWindows] = useState('');
    const [kitchen, setKitchen] = useState('');
    const [heatLoad, setHeatLoad] = useState('');
    const [people, setPeople] = useState('');

    const calculateHeatLoad = () => {
        // Simplified calculation: assuming a linear contribution from each factor
        const baseHeatLoad = parseFloat(squareFootage);
        const wallContribution = parseFloat(walls) || 0;
        const floorContribution = parseFloat(floor) || 0;
        const ductsContribution = parseFloat(ducts) || 0;
        const ceilingContribution = parseFloat(ceiling) || 0;
        const windowsContribution = parseFloat(windows) || 0;
        const kitchenContribution = parseFloat(kitchen) || 0;
        const peopleContribution = parseFloat(people) || 0;

        // const totalHeatLoad = wallContribution + floorContribution + ductsContribution + ceilingContribution + windowsContribution * baseHeatLoad + kitchenContribution + peopleContribution;
        const totalHeatLoad = (
            (wallContribution + floorContribution + ductsContribution + windowsContribution) * baseHeatLoad
          ) + kitchenContribution + peopleContribution;


        setHeatLoad(`Total Estimated Heat Load: ${totalHeatLoad.toFixed(2)} BTU/hr`);
    };

    return (
        <div className="Calculator">
            <label htmlFor="sqft">Sqft:</label>
            <input
                id="sqft"
                type="number"
                value={squareFootage}
                readOnly // Since the value is controlled externally
            />
            <br />
            <label htmlFor="walls">Walls:</label>
            <select
                id="walls"
                type="number"
                value={walls}
                onChange={(e) => setWalls(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="8">None</option>
                <option value="3">R13(3.5")</option>
                <option value="2.5">R19(5.5")</option>
            </select>
            <br />
            <label htmlFor="floor">Floor:</label>
            <select
                id="floor"
                type="number"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="4.5">None</option>
                <option value="1.5">R19</option>
                <option value="0">Slab</option>
            </select>
            <br />
            <label htmlFor="ducts">Ducts:</label>
            <select
                id="ducts"
                type="number"
                value={ducts}
                onChange={(e) => setDucts(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="5.5">R4.2</option>
                <option value="5">R6</option>
                <option value="3">R8</option>
            </select>
            <br />
            <label htmlFor="ceiling">Ceiling:</label>
            <select
                id="ceiling"
                type="number"
                value={ceiling}
                onChange={(e) => setCeiling(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="4.5">R19(6")</option>
                <option value="3.5">R30(10")</option>
                <option value="3">R38(12")</option>
            </select>
            <br />
            <label htmlFor="windows">Windows:</label>
            <select
                id="windows"
                type="number"
                value={windows}
                onChange={(e) => setWindows(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="10.5">Single</option>
                <option value="8.5">Dual (Metal)</option>
                <option value="7">Dual (Vinyl)</option>
            </select>
            <br />
            <label htmlFor="kitchen">Kitchen:</label>
            <select
                id="kitchen"
                type="number"
                value={kitchen}
                onChange={(e) => setKitchen(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="1800">Average</option>
                <option value="3400">Large</option>
            </select>
            <br />
            <label htmlFor="people">People:</label>
            <select
                id="people"
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="530">1</option>
                <option value="1060">2</option>
                <option value="1590">3</option>
                <option value="2120">4</option>
                <option value="2650">5</option>
                <option value="3180">6</option>
            </select>
            <br />
            <button onClick={calculateHeatLoad}>Calculate Heat Load</button>
            <p>{heatLoad}</p>
        </div>
    );
}

export default Calculator;
