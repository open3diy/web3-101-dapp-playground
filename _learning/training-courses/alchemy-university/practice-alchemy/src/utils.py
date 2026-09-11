# Convertir hex a decimal
def hex_to_dec(hex_str):
    """Convert hex string to decimal"""
    if hex_str and hex_str.startswith('0x'):
        return int(hex_str, 16)
    return hex_str

