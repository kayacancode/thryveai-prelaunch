import motion  from "motion/react";

export default function TestMotion() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ background: "blue", width: "100px", height: "100px" }}
      />
    </div>
  );
}
