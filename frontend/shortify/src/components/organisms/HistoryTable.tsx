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
import { SHORTIFY_URL } from "@lib/constant";
import { IShortUrl } from "src/types/shortener.interface";


type HistoryTableProps = {
    data: IShortUrl[];
    togglShortUrlStatus?: (shortCode: string, isActive: boolean) => void;
};

const HistoryTable = ({ data, togglShortUrlStatus }: HistoryTableProps) => {
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
                    {data.map((entry) => {
                        const SHORTENED_URL = `${SHORTIFY_URL}/${entry.shortCode}`;

                        return (
                            <TableRow key={entry.id}>
                                <TableCell>
                                    <div className="flex items-center justify-between gap-2">
                                        <a
                                            href={SHORTENED_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {SHORTENED_URL}
                                        </a>
                                        <CopyButton text={SHORTENED_URL} />
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 max-w-xs">
                                        <img
                                            src={`https://www.google.com/s2/favicons?sz=32&domain_url=${entry.originalUrl}`}
                                            alt="favicon"
                                            className="w-5 h-5 shrink-0"
                                            onError={(e) => (e.currentTarget.style.display = "none")}
                                        />
                                        <span className="truncate">{entry.originalUrl}</span>
                                    </div>
                                </TableCell>

                                <TableCell>{entry.clickCount}</TableCell>
                                <TableCell>
                                    <Badge onClick={() => togglShortUrlStatus?.(entry.shortCode, entry.isActive)} variant={entry.isActive ? "success" : "warning"} className="cursor-pointer">
                                        {entry.isActive ? "Active" : "Inactive"}
                                    </Badge>
                                </TableCell>
                                <TableCell>{new Date(entry.createdAt).toLocaleDateString()}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HistoryTable;
