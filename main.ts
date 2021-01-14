basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorStop(maqueen.aMotors.M1)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 35)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.aMotors.M2)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 35)
    }
})
