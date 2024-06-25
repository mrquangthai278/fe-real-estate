// Header
interface CustomHeaderItem {
  title: string;
}

// Cell
interface MenuItem {
  id: string;
  label?: string;
}
interface ActionCellItem {
  menu: MenuItem[];
}

interface TextCellItem {
  field?: string;
}

interface CustomCellItem extends ActionCellItem, TextCellItem {
  type: "action" | "text";
}
