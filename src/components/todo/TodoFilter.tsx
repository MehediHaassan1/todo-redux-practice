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

const TodoFilter = ({priority, setPriority}) => {
    
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
                    value={priority}
                    onValueChange={setPriority}
                >
                    <DropdownMenuRadioItem value="">
                        All
                    </DropdownMenuRadioItem>
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
