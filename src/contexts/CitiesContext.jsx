import {createContext, useContext, useEffect, useState} from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({children}) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(function () {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const date = await res.json();
                setCities(date);
            } catch {
                alert("There was an error loading data..");
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const date = await res.json();
            setCurrentCity(date);
        } catch {
            alert("There was an error loading data..");
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const date = await res.json();
            setCities(cities=>[...cities,date])
        } catch {
            alert("There was an error loading date..");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider value={{cities, isLoading, currentCity, getCity,createCity}}>
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error("CitiesContext was used outside the CitiesProvider");
    return context;
}

export {CitiesProvider, useCities};
