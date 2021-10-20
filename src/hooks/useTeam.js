import { useEffect, useState } from "react"

const useTeam = () => {
    const [team, setTeam] = useState([]);
    useEffect( () => {
        fetch('https://raw.githubusercontent.com/nasir35/Json-Data/main/FakeTeam.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    })

    return team;
}
export default useTeam;