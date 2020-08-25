export interface Appliances {
    id: string;
    device: Device;
    model: Model;
    type: string;
    nickname: string;
    image: string;
    settings: Settings;
    aircon: Aircon;
    signals: any[];
}

interface Aircon {
    range: Range;
    tempUnit: string;
}

interface Range {
    modes: Modes;
    fixedButtons: string[];
}

interface Modes {
    auto: Auto;
    blow: Auto;
    cool: Auto;
    dry: Auto;
    warm: Auto;
}

interface Auto {
    temp: string[];
    dir: string[];
    dirh: string[];
    vol: string[];
}

interface Settings {
    temp: string;
    temp_unit: string;
    mode: string;
    vol: string;
    dir: string;
    dirh: string;
    button: string;
    updated_at: string;
}

interface Model {
    id: string;
    manufacturer: string;
    remote_name: string;
    series: string;
    name: string;
    image: string;
}

interface Device {
    name: string;
    id: string;
    created_at: string;
    updated_at: string;
    mac_address: string;
    bt_mac_address: string;
    serial_number: string;
    firmware_version: string;
    temperature_offset: number;
    humidity_offset: number;
}