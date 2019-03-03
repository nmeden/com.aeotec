# Aeotec

This app adds support for Aeotec devices in Homey.

### Changelog:
**2.0.27**
* Added Micro Switch G2
* Added Micro Dimmer G2
* Added Micro Smart Switch G2
* Added Micro Smart Dimmer G2

**2.0.24 - 2.0.26**
* Fixes motion alarm on the DSB05 Multisensor 4-in-1

**2.0.23**
* Fixes device icons not showing

**2.0.22**
* Fixes for Garage Door Controller Gen5

**2.0.21**
* Fixes Door/Window Sensor Gen5
* Meshdriver update

**2.0.20**
* Added Nano Switch ZW140

**2.0.18**
* Fixes for the RGB bulb, re-added the rainbow mode Flow as well

**2.0.17**
* Dual switches should now update their state in Homey when triggered by hand

**2.0.16**
* Fixed Flows for the Wallmote Quad
* Fixed on/off status for the Heavy Duty Switch

**2.0.15**
* Fixed an issue with App store compatibility

**2.0.1 - 2.0.14**
* Bug fixes

**2.0.0**
* WARNING: Preview release, this might be unstable
* App now fully implemented in SDK2
* Added the following devices:
  - Water sensor 6
  - Heavy duty smart switch 5
  - Wallmote duo
  - LED strip

**1.6.5**
* Fixed support for DSB45

**1.6.4**
* Add AUS product ids
* Possible fix for ZW111 dim from Flow

**1.6.3**
* Fix product image of ZW095 - Home Energy Clamp

**1.6.2**
* Added productIds for ZW130 - Wallmote Quad and ZW088 - KeyFob
* Added support for ZW116 - Nano Switch
* Add support for ZW095 - Home Energy Clamp

**1.6.1**
* Fixed support for ZW139
* Added support for ZW116 as a separate device

**1.6.0**
* add support for DSA32 - Panic Button
* add support for ZW111 - Nano Dimmer
* add support for ZW139 - Nano Switch

**1.5.2**
* ZW100 - MultiSensor 6 update:
  - Added Tamper Capability (re-pair needed)
  - Added setting 81 - LED behavior on Alarms (working on Device Firmware v1.8 and higher only)
  - Cleaned up device settings labels
* Update Z-Wave driver to v1.1.8

**1.5.1**
* fix minor bugs for ZW075 - Smart Switch and ZW089 - Recessed Door Sensor

**1.5.0**
* add sound selection Flow card for ZW080 - Siren Gen5

**1.4.1**
* fix ZW130 - Wallmote Quad, multiple devices were not checked properly with triggers

**1.4.0**
* add support for ZW130 - Wallmote Quad

**1.3.0**
* add support for ZW112 - Door/Window Sensor 6
* add support for ZW117 - Range Extender 6
* add Power Meter report (%) parameters
  - ZW075
  - ZW096
  - ZW099

**1.2.0**
* Coding Clean-up
* More Default Configuration fixes
* Calibrations ZW100 now user friendly
* add Power Meter capability: (Re-Pair needed)
  - ZW075
  - ZW096
  - ZW099

**1.1.1**
* Fix default configuration (all drivers)
* Add Keyfob mobile card (for battery)

**1.1.0**
Add Support:
* ZW088 - Keyfob
* ZW098 - LED Bulb (RGBW Functionality)
