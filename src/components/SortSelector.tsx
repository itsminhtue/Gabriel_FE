import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HiSortAscending } from "react-icons/hi";

export type SortOption = "name" | "-name" | "metacritic" | "-metacritic";

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
    { label: "Name ↑ (A–Z)", value: "name" },
    { label: "Name ↓ (Z–A)", value: "-name" },
    { label: "Metacritic ↑", value: "metacritic" },
    { label: "Metacritic ↓", value: "-metacritic" },
];

interface SortSelectorProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

const SortSelector = ({ value, onChange }: SortSelectorProps) => {
    const [selected, setSelected] = useState<SortOption>(value);

    // Đồng bộ nếu prop `value` thay đổi từ ngoài
    useEffect(() => {
        setSelected(value);
    }, [value]);

    const currentLabel =
        SORT_OPTIONS.find((opt) => opt.value === selected)?.label || "Sắp xếp";

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    <HiSortAscending /> {currentLabel}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content minW="10rem">
                        <Menu.RadioItemGroup
                            value={selected}
                            onValueChange={(details) => {
                                const val = details.value as SortOption;
                                setSelected(val);
                                onChange(val);
                            }}
                        >
                            {SORT_OPTIONS.map((item) => (
                                <Menu.RadioItem key={item.value} value={item.value}>
                                    {item.label}
                                    <Menu.ItemIndicator />
                                </Menu.RadioItem>
                            ))}
                        </Menu.RadioItemGroup>

                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortSelector;
