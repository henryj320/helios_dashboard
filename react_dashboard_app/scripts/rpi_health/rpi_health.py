"""A module to return the major health details of a system."""
from datetime import datetime
import json
import sys
import psutil


JSON_PATH = "./scripts/rpi_health/assets/records.json"


def run() -> dict:
    """Entry method of rpi_Health.

    Returns:
        dict: A dict containing the uptime, CPU usage,
            temperature, memory used, etc.
    """
    health = get_health()  # A dict containing the health characteristics.

    update_json(JSON_PATH, health)

    records = return_file(JSON_PATH)

    return records


def get_health() -> dict:
    """Return a dict containing the main health characteristics of the system using the psutil library.  # pylint: disable=line-too-long.

    Returns:
        dict: A dict containing the health characteristics of the system.
    """
    cpu_percent = psutil.cpu_percent(interval=1)  # Percentage of CPU in use.

    mem = psutil.virtual_memory()
    memory_percent = mem.percent  # The percentage of memory in use.
    memory_total = round((mem.total / 1000000000), 1)  # Total memory in GB.
    memory_used = round((mem.used / 1000000000), 1)  # Memory in use in GB.

    temperature = psutil.sensors_temperatures()  # Dict of all temperatures.
    temp_keys = list(temperature.keys())[0]  # First key of all temperatures.
    temp = temperature[temp_keys][0].current   # Sets temp to first of the options.
    temp = round(temp, 1)

    boot_time = psutil.boot_time()  # Returns the time that the computer was booted up.
    cur_time = datetime.now()  # Returns the current time.
    uptime = cur_time - datetime.fromtimestamp(boot_time)

    health = {
        "datetime": convert_datetime(str(cur_time)),
        "success": True,
        "temp": str(temp),
        "cpu_percent": str(cpu_percent),
        "memory_percent": str(memory_percent),
        "memory_total": str(memory_total),
        "memory_used": str(memory_used),
        "uptime": convert_uptime(str(uptime))
    }

    print("\nCPU Usage:        " + str(cpu_percent) + "%")
    print("Temperature:      " + str(temp) + "°c")
    print("Memory Usage:     " + str(memory_percent) + "%")
    print("Used Memory:      " + str(memory_used) + " GB")
    print("Total Memory:     " + str(memory_total) + " GB")
    print("Uptime:           " + str(uptime) + "\n")

    return health


def update_json(json_path: str, health: dict) -> bool:
    """Update the JSON file with the new health metrics.

    Args:
        json_path (str): The path to the JSON file.
        health (dict): The dict containing the system's health metrics.
    Returns:
        bool: True if the update succeeded.
    """
    try:
        file = open(json_path, encoding='utf-8')  # pylint: disable=consider-using-with
        json_file = json.load(file)  # Converts the file into a JSON object.
        file.close()

        max_metrics = 1000

        # Checks if the oldest metrics need to be removed or not.
        while len(json_file["data"]) > max_metrics:

            fifo_oldest = json_file["data"].pop(0)  # Removes the oldest RPI Health entry.

            # Prints the removed metrics
            print("\nOldest health metrics being deleted because number of metrics saved in")
            print(str(JSON_PATH) + "is greater than " + str(max_metrics) + ":")
            print(fifo_oldest)
            print()

        json_file["data"].append(health)  # Adds the latest metrics to the end of the file.

        with open(JSON_PATH, "w", encoding='utf-8') as file:
            json.dump(json_file, file, indent=4)  # Converts the JSON object back into the file.

        print("JSON file updated.\n")

    except FileExistsError:
        print("Failed to update JSON file. Exiting...\n")
        sys.exit()

    return True


def convert_datetime(input_datetime: str) -> list:
    """Convert a stringified datetime into an array.

    Args:
        datetime (str): A datetime string in the format of '2023-03-08 22:38:37.113266'.
    Returns:
        list: An array containing each of the datetime fields separated.
    """
    date_full = input_datetime.split(" ")
    time_fullstring = date_full[1]  # Contains HH:MM:SS.123456
    date_fullstring = date_full[0]  # Contains YYYY-MM-DD

    date_split = date_fullstring.split("-")

    years = date_split[0]
    months = date_split[1]
    days = date_split[2]

    time_split = time_fullstring.split(".")[0]  # Removes the nanoseconds.
    time_split = time_split.split(":")

    hours = time_split[0]
    minutes = time_split[1]
    seconds = time_split[2]

    return [years, months, days, hours, minutes, seconds]


def convert_uptime(uptime: str) -> list:
    """Convert the uptime string into an array.

    Args:
        uptime (str): The uptime in a string of the format "1 day, 14:18:25.435976".
    Returns:
        list: An array of format [days, hours, minutes, seconds].
    """
    days = uptime.split(" ")
    time = days[len(days) - 1]  # Contains HH:MM:SS.123456

    if len(days) == 1:
        days = "0"  # If the computer has been running for 0 days.
    else:
        days = days[0]  # If the computer has been running for 1 or more days.

    time_split = time.split(".")[0]
    time_split = time_split.split(":")
    hours = time_split[0]
    minutes = time_split[1]
    seconds = time_split[2]

    return [days, hours, minutes, seconds]


def return_file(json_path: str) -> dict:
    """Return the JSON file as a dict.

    Args:
        json_path (str): The path to the JSON file that needs to be returned.

    Returns:
        dict: A dict containing the value of the JSON file.
    """

    file = open(json_path, encoding='utf-8')  # pylint: disable=consider-using-with
    json_file = json.load(file)  # Converts the file into a JSON object.
    file.close()
    return json_file


if __name__ == '__main__':
    run()
