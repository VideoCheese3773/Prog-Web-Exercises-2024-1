import { FactsList } from "../../const/FactsList"

export function Facts({ count }) {
    return (
        <div className="funFacts">
            <h3>Edd's Random Fun Facts!</h3>
            {
                count > 0 ?
                    <h2>{FactsList[count - 1]}</h2>
                    :
                    <h2>Use the counter to go between facts!</h2>
            }
        </div>
    )
}