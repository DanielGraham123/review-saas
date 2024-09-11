import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons"

export const priorities = [
    {
        label: "Low",
        value: "low",
        icon: ArrowDownIcon,
    },
    {
        label: "Medium",
        value: "medium",
        icon: ArrowRightIcon,
    },
    {
        label: "High",
        value: "high",
        icon: ArrowUpIcon,
    },
]

export const statuses = [
    {
        value: "1",
        label: "1",
        // icon: QuestionMarkCircledIcon,
    },
    {
        value: "2",
        label: "2",
        // icon: CircleIcon,
    },
    {
        value: "3",
        label: "3",
        // icon: StopwatchIcon,
    },
    {
        value: "4",
        label: "4",
        // icon: CheckCircledIcon,
    },
    {
        value: "5",
        label: "5",
        // icon: CrossCircledIcon,
    },
]
