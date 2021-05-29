import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles, faHome, faBook } from '@fortawesome/free-solid-svg-icons'

export function AssetDetails({ type, houseRules }) {

    let assetTypeDesc
    const { isSmoking, isPets } = houseRules

    switch (type) {
        case 'Entire home':
            assetTypeDesc = 'You’ll have the whole compound to yourself.'
            break;
        case 'Apartment':
            assetTypeDesc = 'Private room, cuzy and sweet.'
        case 'Studio':
            assetTypeDesc = 'Enjoy private room with a lot of space.'
            break;
        case 'Shared apartment':
            assetTypeDesc = 'Sharing is caring, when individuals become a group.'
            break;
    }

    return (
        <div className="about-asset-container">
            <div className="about-asset-type">
                <FontAwesomeIcon icon={faHome} size="2x" />
                <h4>{type}</h4>
                <p>{assetTypeDesc}</p>
            </div>
            <div className="about-asset-clean">
                <FontAwesomeIcon icon={faHandSparkles} size="2x" />
                <h4>Enhanced Clean</h4>
                <p>This host committed to Airdod's 5-step enhanced cleaning process.</p>
            </div>
            <div className="about-asset-houserules">
                <FontAwesomeIcon icon={faBook} size="2x" />
                <h4>House rules</h4>
                <p> The host {isSmoking ? 'allow smoking' : 'doesn’t allow smoking'}
                 and {isPets ? 'allow pets' : 'doesn’t allow smoking'}
                </p>
            </div>
        </div>
    )
}