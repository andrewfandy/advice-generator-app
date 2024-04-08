export default function Footer() {
    const challengeLink = "https://www.frontendmentor.io/home";
    const createdBy = "https://github.com/andrewfandy?tab=repositories"
    return (
        <div className="mt-auto p-2 flex flex-col justify-center items-center font-family-base text-white">
            <p>Challenge by <a className="underline hover:font-extrabold" href={challengeLink}>Frontend Mentor</a></p>
            <p>Coded by by <a className="underline hover:font-extrabold" href={createdBy}>Andrew</a></p>
        </div>
    )
}