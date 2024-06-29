import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const TodoFilter = () => {
    const [position, setPosition] = useState("");
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-primary-gradient font-semibold">
                    Filter
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Priority Level</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                >
                    <DropdownMenuRadioItem value="high">
                        High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="medium">
                        Medium
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">
                        Low
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TodoFilter;
