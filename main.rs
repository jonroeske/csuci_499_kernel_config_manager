//! 2023(c) Jon Roeske, Evan Miller and Huey Hsu
//! main.rs
use std::io::{stdout, BufWriter};
use std::process::{Command, Stdio};
use std::path::Path;

//! outputs sysctl -a
//! outputs all runtime parameters
fn get_all_sysctl_params() {
   
}

//! ls -l /proc/sys/
//! outputs all tunable classes
fn get_all_tunable_classes() {

}

//! ls -l /proc/sys/<TUNABLE_CLASS>/<PARAMETER>
//! outputs parameter(s) from tunable class
fn get_all_param_class() {

}

//! sysctl <TUNABLE_CLASS>.<PARAMETER>=<TARGET_VALUE>
//! sets runtime parameter with sysctl
fn set_runtime_kernel_param() {
  
}

//! sysctl -w <TUNABLE_CLASS>.<PARAMETER>=<TARGET_VALUE> >> /etc/sysctl.conf
//! sets persistent parameter in sysctl.conf
fn set_persistent_kernel_param() {
  
}
