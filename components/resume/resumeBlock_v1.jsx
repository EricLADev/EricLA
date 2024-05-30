
const ResumeBlock = ({ identifier, details }) => {
    return (
        <div id={identifier} className="pb-8 w-full lg:w-[48%]">
            <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                <span>
                    {details.title}
                </span>
            </h3>
            <div dangerouslySetInnerHTML={{__html: details.content}}></div>
        </div>
    );
};

export default ResumeBlock;