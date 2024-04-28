export const Btn = ({ children }) => {

    return (
        <button className='w-1/3 bg-secondary bg-opacity-20 border-2 border-secondary text-text p-2 rounded-lg' type="submit">
            {children}
        </button>
    )
}