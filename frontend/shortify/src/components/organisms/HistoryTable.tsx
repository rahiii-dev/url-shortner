import Badge from "@components/atoms/Badge";
import {
    Table,
    TableRow,
    TableCell,
    TableHeaderCell,
    TableHead,
    TableBody,
    TableContainer,
} from "@components/atoms/Table";
import CopyButton from "@components/molecules/CopyButton";

type HistoryEntry = {
    id: string;
    shortLink: string;
    originalLink: string;
    clicks: number;
    status: "Active" | "Inactive";
    createdAt: string;
};

type HistoryTableProps = {
    data: HistoryEntry[];
};

const HistoryTable = ({ data }: HistoryTableProps) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Short Link</TableHeaderCell>
                        <TableHeaderCell>Original Link</TableHeaderCell>
                        <TableHeaderCell>Clicks</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Date</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((entry) => (
                        <TableRow key={entry.id}>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={entry.shortLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        {entry.shortLink}
                                    </a>
                                    <CopyButton text={entry.shortLink} />
                                </div>
                            </TableCell>
                            <TableCell className="truncate max-w-xs">{entry.originalLink}</TableCell>
                            <TableCell>{entry.clicks}</TableCell>
                            <TableCell>
                                <Badge variant={entry.status === "Active" ? "success" : "warning"}>
                                    {entry.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{new Date(entry.createdAt).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HistoryTable;
