//src\radix\data\table.tsx

//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Button, Table, } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ThemeButtonsStyle, ThemeDataStyle } from "../radixtheme";

/**
 * XTable
 * onselection: (name: string) => void;
 */
export interface TableProp {
    headers: string[]
}
export default function XTable({ headers }: TableProp) {

    const size: any = ThemeDataStyle.TABLE_DEF_SIZE;

    const renderMainContent = () => {
        return (
            <Table.Root size={size}>

                <Table.Header>
                    <Table.Row>

                        <Table.ColumnHeaderCell>Field-A Header</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Field-B Header</Table.ColumnHeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    <Table.Row>
                        <Table.Cell>Danilo Sousa</Table.Cell>
                        <Table.Cell>Zahra Ambessa</Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table.Root>

        )
    }

    return (
        <Flex direction="column" gap="2">
            {renderMainContent()}
        </Flex>
    )

}//end

/*
<Table.Row>
    <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
    <Table.Cell>danilo@example.com</Table.Cell>
</Table.Row>
*/