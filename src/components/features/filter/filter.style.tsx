import { 
    FormControl as FormControlMUI, 
    styled,
    Select as SelectMUI,
    MenuItem as MenuItemMUI, 
    Typography
} from "@mui/material"

const FormControl = styled(FormControlMUI)`
    min-width: 157px !important;
    border: none;
    box-shadow: 0px 0px 6px 0px #e4e0e0;
`;

const Select = styled(SelectMUI)``;

const PlaceHolder = styled(Typography)`
    font-size: 12px;
`

const MenuItem = styled(MenuItemMUI)``;

export const FilterStyle = {
    FormControl,
    Select,
    MenuItem,
    PlaceHolder,
}