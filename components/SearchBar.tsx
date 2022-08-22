import { useState } from "react";

export function SearchBar() {
    const [search, setSearch] = useState('');

    return (
        <form>
            <div className="w-30 text-yellow-300 flex items-center">
                <p>
                    Quer conhecer mais sobre qual raça?
                </p>
                <input type="text" className="rounded-xl m-2" />
            </div>
        </form>
    )
}