<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Examtimer module admin settings and defaults
 *
 * @package   mod_examtimer
 * @copyright 2009 Petr Skoda  {@link http://skodak.org}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {
    //--- general settings -----------------------------------------------------------------------------------
    $settings->add(new admin_setting_configcheckbox('examtimer/showexpanded',
        get_string('showexpanded', 'examtimer'),
        get_string('showexpanded_help', 'examtimer'), 1));

    $settings->add(new admin_setting_configtext('examtimer/maxsizetodownload',
        get_string('maxsizetodownload', 'examtimer'),
        get_string('maxsizetodownload_help', 'examtimer'), '', PARAM_INT));
}
