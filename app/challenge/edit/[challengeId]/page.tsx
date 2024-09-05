const ChallengeEdit = (
    {params} : {params: {challengeId : string}}
) => {
    return ( 
        <div>
            {
                params.challengeId
            }
        </div>
     );
}
 
export default ChallengeEdit;