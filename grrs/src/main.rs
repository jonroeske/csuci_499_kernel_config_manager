// 2023(c) Jon Roeske, Evan Miller and Huey Hsu
// main.rs
// WARNING: MUST HAVE ROOT UID AND GID
use std::io::{stdout, BufWriter};
use std::process::{Command, Stdio, Output};
use std::path::Path;
use nix::unistd::Uid;

// outputs sysctl -a
// outputs all runtime parameters
fn get_all_sysctl_params() {
   if !Uid::effective().is_root() {
        panic!("You must run this executable with root permissions");
    }
   let output: Output = Command::new { program: "/usr/bin/sysctl" }
      .arg("-a")
      .output()
      .expect("Failed to execute command");
   return std::io::stdout().lines();
}

// ls -l /proc/sys/
// outputs all tunable classes
fn get_all_tunable_classes() {
   if !Uid::effective().is_root() {
        panic!("You must run this executable with root permissions");
    }
   let output: Output = Command::new { program: "ls" }
      .arg(&["-l", "/proc/sys"])
      .output()
      .expect("Failed to execute command");
   return output;
}

// ls -l /proc/sys/<TUNABLE_CLASS>/<PARAMETER>
// outputs parameter(s) from tunable class
fn get_all_param_class(tunable_class: &str) {
   if !Uid::effective().is_root() {
        panic!("You must run this executable with root permissions");
    }
   let output: Output = Command::new { program: "ls" }
      .arg(&["-l", "/proc/sys/", tunable_class])
      .output()
      .expect("Failed to execute command");
   return output;
}

// sysctl <TUNABLE_CLASS>.<PARAMETER>=<TARGET_VALUE>
// sets runtime parameter with sysctl
fn set_runtime_kernel_param(tunable_class: &str, parameter: &str, target_value: &str) {
  if !Uid::effective().is_root() {
        panic!("You must run this executable with root permissions");
    }
   let output: Output = Command::new { program: "/usr/bin/sysctl" }
      .arg(tunable_class+"."+parameter+"="+target_value)
      .output()
      .expect("Failed to execute command");
   return output;
}

// sysctl -w <TUNABLE_CLASS>.<PARAMETER>=<TARGET_VALUE> >> /etc/sysctl.conf
// sets persistent parameter in sysctl.conf
fn set_persistent_kernel_param(tunable_class, parameter, target_value: &str) {
  if !Uid::effective().is_root() {
        panic!("You must run this executable with root permissions");
    }
   let output: Output = Command::new { program: "/usr/bin/sysctl" }
      .arg(&["-w", tunable_class+"."+parameter+"="+target_value, ">>", "/etc/sysctl.conf"])
      .output()
      .expect("Failed to execute command");
   return output;
}

// getent passwd username
// checks if username exists
fn check_account(username: &str){
   if !Uid::effective().is_root() {
        panic!("You must run this executable with root permissions");
    }
   let output: Output = Command::new { program: "/usr/bin/getent" }
      .arg(&["passwd", username])
      .output()
      .expect("Failed to execute command");
   if output.equals(""){
      return bool::true;
   }
   return bool::false;
}

// su username -c 'echo' <<< password
// checks account password
fn check_password(username: &str, password: &str){
   if !Uid::effective().is_root() {
        panic!("You must run this executable with root permissions");
    }
   let output: Output = Command::new { program: "/usr/bin/su" }
      .arg(&[username, "-c", "'echo'", "<<<", password])
      .output()
      .expect("Failed to execute command");
   if output == "": bool{
      return bool::true;
   }
   return bool::false;
}